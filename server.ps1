$port = 8080
$dir  = "C:\Users\usuario\FinanzasNT"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$port/")
$listener.Start()

$ip = (Get-NetIPAddress -AddressFamily IPv4 |
       Where-Object { $_.IPAddress -notlike '127.*' -and $_.PrefixOrigin -ne 'WellKnown' } |
       Select-Object -First 1).IPAddress

Write-Host ""
Write-Host "  FinanzasNT corriendo!" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Abri esto en tu celular (mismo Wi-Fi):" -ForegroundColor Yellow
Write-Host "  http://$ip`:$port" -ForegroundColor White
Write-Host ""
Write-Host "  No cierres esta ventana." -ForegroundColor Gray
Write-Host ""

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css"
  ".js"   = "application/javascript"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
}

while ($listener.IsListening) {
  try {
    $ctx  = $listener.GetContext()
    $path = $ctx.Request.Url.LocalPath
    if ($path -eq "/" -or $path -eq "") { $path = "/index.html" }
    $file = Join-Path $dir $path.TrimStart("/").Replace("/","\")
    if (Test-Path $file -PathType Leaf) {
      $ext  = [IO.Path]::GetExtension($file).ToLower()
      $body = [IO.File]::ReadAllBytes($file)
      $ctx.Response.ContentType     = $mime[$ext] ?? "application/octet-stream"
      $ctx.Response.ContentLength64 = $body.Length
      $ctx.Response.OutputStream.Write($body, 0, $body.Length)
    } else {
      $ctx.Response.StatusCode = 404
    }
    $ctx.Response.OutputStream.Close()
  } catch {}
}
