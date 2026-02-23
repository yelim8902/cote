#!/bin/bash
# GitHub 푸시 및 배포 안내 스크립트
set -e
cd "$(dirname "$0")/.."

echo "=========================================="
echo "  GitHub 푸시 및 배포"
echo "=========================================="
echo ""

if ! gh auth status &>/dev/null; then
  echo "1. GitHub 로그인이 필요합니다. 아래 명령 실행 후 브라우저에서 로그인하세요."
  echo "   gh auth login"
  echo ""
  read -p "로그인을 마치셨다면 Enter를 눌러 계속하세요..."
fi

echo ""
echo "2. 원격 저장소를 생성하고 푸시합니다..."
if git remote get-url origin &>/dev/null; then
  echo "   (이미 origin이 있으면 푸시만 진행)"
  git push -u origin main
else
  gh repo create cote --public --source=. --remote=origin --push --description "자료구조·알고리즘 시각화"
fi

echo ""
echo "3. GitHub Pages 설정"
echo "   리포지토리 → Settings → Pages"
echo "   Build and deployment → Source: 'GitHub Actions' 선택"
echo "   저장하면 자동 배포됩니다."
echo ""
echo "   배포 URL: https://<사용자명>.github.io/cote/"
echo "=========================================="
