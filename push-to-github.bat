@echo off
title Push Portfolio to GitHub
echo ===================================================
echo   BASML Portfolio Git Deployment Tool
echo ===================================================
echo.
echo Step 1: Please make sure you have created a public repository
echo         on GitHub named "ramanan-portfolio".
echo         Link: https://github.com/new
echo.
set /p REPO_NAME="Press Enter to use default repository name (ramanan-portfolio) or type another: "
if "%REPO_NAME%"=="" set REPO_NAME=ramanan-portfolio

echo.
echo Configuring remote repository for %REPO_NAME%...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/ramanan081-hub/%REPO_NAME%.git
git branch -M main

echo.
echo Pushing code to GitHub...
echo.
echo [IMPORTANT] If a window pops up, sign in to your GitHub account.
echo If it asks for password in the console, use your GitHub Personal Access Token (PAT).
echo.
git push -u origin main -f

echo.
echo ===================================================
echo Process complete! Please check the Settings -> Pages tab
echo of your repository on GitHub.
echo ===================================================
pause
