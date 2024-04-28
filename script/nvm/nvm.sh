#!/bin/sh

zshrc_input_file="$HOME/.zshrc"
bashrc_input_file="$HOME/.bashrc"

zshrc_script=$(cat << 'END'
#zsh nvm setting
source $HOME/zsh-nvm.sh
END
)

bashrc_script=$(cat << 'END'
#bash nvm setting
source $HOME/bash-nvm.sh
END
)

# 문자열을 찾기 위한 패턴
zshrc_search_pattern="#zsh nvm setting"
bashrc_search_pattern="#bash nvm setting"

if [ -f "$HOME/.zshrc" ]; then
    echo "Zsh를 사용하는 것으로 보입니다."
    if grep -q "$zshrc_search_pattern" $zshrc_input_file; then
        echo "특정 문자열을 찾았습니다. 이미 삽입 되어있습니다."
    else
        echo "특정 문자열을 찾지 못했습니다."
        echo "$zshrc_script" >> "$zshrc_input_file"
        cp ./zsh-nvm.sh $HOME
        exec /bin/zsh
        source $zshrc_input_file
        echo "zsh setting 완료!"
    fi
else
    echo "Zsh를 사용하지 않는 것으로 보입니다."
    if grep -q "$bashrc_search_pattern" $bashrc_input_file; then
        echo "특정 문자열을 찾았습니다. 이미 삽입 되어있습니다."
    else
        echo "특정 문자열을 찾지 못했습니다."
        echo "$zshrc_script" >> "$bashrc_input_file"
        cp ./bash-nvm.sh $HOME
        source $bashrc_input_file
        echo "bash setting 완료!"
    fi
fi
