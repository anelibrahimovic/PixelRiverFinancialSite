@echo off
setlocal
cd /d "%~dp0"
if not exist "%~dp0standalone.html" (
 echo Extract the entire ZIP first: standalone.html is missing.
 pause
 exit /b 1
)
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
 start "Yarrow Mullein Banking" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --new-window "%~dp0standalone.html"
 exit /b 0
)
if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
 start "Yarrow Mullein Banking" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --new-window "%~dp0standalone.html"
 exit /b 0
)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
 start "Yarrow Mullein Banking" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --new-window "%~dp0standalone.html"
 exit /b 0
)
start "" "%~dp0standalone.html"
