# Run ONCE: gh auth login
# Then run this script in PowerShell

$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

gh auth status | Out-Null

Write-Host "=== portfolio-hub ===" -ForegroundColor Cyan
Set-Location "C:\Users\user\Desktop\portfolio-hub"
git branch -M main
gh repo create portfolio-hub --public --source=. --remote=origin --push

Write-Host "=== iron-body-gym ===" -ForegroundColor Cyan
Set-Location "C:\Users\user\Desktop\gym site"
git branch -M main
gh repo create iron-body-gym --public --source=. --remote=origin --push

Write-Host ""
Write-Host "Done. Repos:" -ForegroundColor Green
Write-Host "  https://github.com/RawidAslanov/portfolio-hub"
Write-Host "  https://github.com/RawidAslanov/iron-body-gym"
