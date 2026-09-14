$ErrorActionPreference = "Stop"

$sourceRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$distRoot = Join-Path $sourceRoot "dist"

New-Item -ItemType Directory -Force -Path (Join-Path $distRoot "icons") | Out-Null
Copy-Item -LiteralPath (Join-Path $sourceRoot "index.html") -Destination (Join-Path $distRoot "index.html") -Force
Copy-Item -LiteralPath (Join-Path $sourceRoot "styles.css") -Destination (Join-Path $distRoot "styles.css") -Force
Copy-Item -LiteralPath (Join-Path $sourceRoot "app.js") -Destination (Join-Path $distRoot "app.js") -Force
Copy-Item -LiteralPath (Join-Path $sourceRoot "service-worker.js") -Destination (Join-Path $distRoot "service-worker.js") -Force
Copy-Item -LiteralPath (Join-Path $sourceRoot "manifest.webmanifest") -Destination (Join-Path $distRoot "manifest.webmanifest") -Force
Copy-Item -LiteralPath (Join-Path $sourceRoot "tracker-logic.js") -Destination (Join-Path $distRoot "tracker-logic.js") -Force
Copy-Item -LiteralPath (Join-Path $sourceRoot "supabase-config.js") -Destination (Join-Path $distRoot "supabase-config.js") -Force
Copy-Item -LiteralPath (Join-Path $sourceRoot "icons\icon.svg") -Destination (Join-Path $distRoot "icons\icon.svg") -Force

Write-Host "dist synchronized from source root."
