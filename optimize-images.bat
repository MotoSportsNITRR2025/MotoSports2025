@echo off
REM Image Optimization Script for Windows
REM This script compresses JPG/PNG images and converts to WebP format
REM 
REM Prerequisites:
REM   1. Install ImageMagick: https://imagemagick.org/script/download.php#windows
REM   2. Install LibWebP: https://developers.google.com/speed/webp/download
REM   3. Add both to System PATH
REM
REM Usage: Save this as optimize-images.bat and run from command line
REM        Or double-click to run in your images directory

setlocal enabledelayedexpansion

echo ============================================
echo  MotoSports Image Optimization Tool
echo ============================================
echo.

REM Check if running in correct directory
if not exist "carImages" (
    echo ERROR: carImages folder not found!
    echo Please run this script from: public\assets\images\
    pause
    exit /b 1
)

cd /d "%~dp0"

REM Create backup and output folders
echo Creating backup and output directories...
if not exist "carImages-backup" mkdir carImages-backup
if not exist "carImages-compressed" mkdir carImages-compressed
if not exist "carImages-webp" mkdir carImages-webp

echo.
echo ============================================
echo Step 1: Backing up original images...
echo ============================================
xcopy "carImages\*.jpg" "carImages-backup\" /Y /Q 2>nul
xcopy "carImages\*.jpeg" "carImages-backup\" /Y /Q 2>nul
xcopy "carImages\*.png" "carImages-backup\" /Y /Q 2>nul
echo Backup complete!

echo.
echo ============================================
echo Step 2: Compressing images with ImageMagick...
echo ============================================

REM Compress JPG images
for %%F in (carImages\*.jpg carImages\*.jpeg) do (
    echo Compressing: %%~nF
    magick convert "%%F" -quality 75 -strip "carImages-compressed\%%~nF"
)

REM Also handle PNG files
for %%F in (carImages\*.png) do (
    echo Compressing: %%~nF
    magick convert "%%F" -strip "carImages-compressed\%%~nF"
)

echo.
echo ============================================
echo Step 3: Converting to WebP format...
echo ============================================

REM Convert JPGs to WebP
for %%F in (carImages\*.jpg carImages\*.jpeg) do (
    echo Converting to WebP: %%~nF
    magick convert "%%F" -quality 80 "carImages-webp\%%~nF.webp"
)

REM Convert PNGs to WebP
for %%F in (carImages\*.png) do (
    echo Converting to WebP: %%~nF
    magick convert "%%F" "carImages-webp\%%~nF.webp"
)

echo.
echo ============================================
echo OPTIMIZATION COMPLETE!
echo ============================================
echo.
echo Summary:
echo - Original images: carImages\
echo - Compressed JPG: carImages-compressed\
echo - WebP versions: carImages-webp\
echo - Backup: carImages-backup\
echo.
echo Next steps:
echo 1. Review compressed images quality
echo 2. Copy carImages-webp\ files to carImages\ directory
echo 3. Update image imports to use .webp extension
echo 4. Keep .jpg as fallback for older browsers
echo.
echo Example code:
echo   ^<picture^>
echo     ^<source srcSet="/assets/images/carImages/carImg_1.webp" type="image/webp" /^>
echo     ^<img src="/assets/images/carImages/carImg_1.jpg" alt="Car" /^>
echo   ^</picture^>
echo.
pause
