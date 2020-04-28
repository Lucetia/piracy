import re
import requests


class color:
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    RESET = '\033[0m'

files = [
    "README.md",
    "security/README.md",
    "laws/README.md"
]

websites = []

error = 0
critical = 0
success = 0

bad_links = []


headers = {'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36'}


def conclude():
    print(str(success + error + critical) + " Links checked\n" + str(success) + " Good links\n" + str(error + critical) + " Bad links\n" + str(critical) + " Critical errors")
    with open("result.txt","w+") as result:
        for bad_link in bad_links:
            result.writelines(bad_link + "\n")
    exit(0)


def extract_urls(fname):
    with open(fname) as f:
        return re.findall("http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))[^)']+", f.read())



for fi in files:
    websites += extract_urls(fi)

print( color.YELLOW + str(len(websites)) + color.RESET + " links found")



for website in websites:
    try:
        response = requests.get(website, headers=headers)
        if response.status_code == 200:
            # print( "[" + color.GREEN + str(response.status_code) + color.RESET + "] " + color.CYAN + website + color.RESET)
            success += 1
        else:
            print( "[" + color.RED + str(response.status_code) + color.RESET + "]" + color.CYAN  + " " + website + color.RESET)
            bad_links.append("[" + str(response.status_code) + "] " + website)
            error += 1
    except KeyboardInterrupt:
        print("exiting...")
        conclude()
        exit(0)
    except:
        print( "[" + color.RED + "ERR" + color.RESET + "] " + color.CYAN + website + color.RESET)
        bad_links.append("[ERR] " + website)
        critical += 1
        pass
conclude()
