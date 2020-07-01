# alias wp='cd ~/workspace'
# alias sf='cd ~/software'
# alias ssrun='./software/ss/ss.AppImage'
# alias music='sudo netease-cloud-music'
# alias studiorun='cd ~/software/android-studio/bin && ./studio.sh'

alias cp="cp -i"     # confirm before overwriting something
alias df="df -h"     # human-readable sizes
alias free="free -m" # show sizes in MB
alias wp="cd ~/workspace"
alias wh="cd /mnt/c/Users/ylyza"
alias cli-proxy=". ~/workspace/@sh/cli-proxy.sh"
alias open="wsl-open"
alias you-get-proxy="proxychains you-get"

function mc() { # mkdir && cd
  mkdir -p $@ && cd ${@:$#}
}
function mcc() { # mkdir && cd && open directory with VSCode
  mkdir -p $@ && cd ${@:$#} && code .
}
