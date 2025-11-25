@echo off
echo ========================================
echo    ADICIONANDO FOTO AO PORTFOLIO
echo ========================================
echo.
echo 1. Coloque sua foto como 'profile.jpg' na pasta assets/
echo 2. Execute este script para fazer o commit
echo 3. Ou execute os comandos manualmente:
echo.
echo    git add assets/profile.jpg
echo    git commit -m "feat: Adiciona foto profissional"
echo    git push
echo.
echo ========================================
pause

if exist "assets\profile.jpg" (
    echo Foto encontrada! Fazendo commit...
    git add assets/profile.jpg
    git commit -m "feat: Adiciona foto profissional do perfil"
    git push
    echo.
    echo ✅ Foto adicionada com sucesso!
    echo Aguarde alguns minutos para aparecer no GitHub Pages
) else (
    echo ❌ Arquivo 'profile.jpg' não encontrado na pasta assets/
    echo Verifique se salvou com o nome correto!
)
pause