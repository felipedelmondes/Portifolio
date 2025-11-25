# Verificação da Foto de Perfil

## Como verificar se a foto foi adicionada:

### 1. Verificar se o arquivo existe:
```powershell
Test-Path "assets\profile.jpg"
```

### 2. Verificar tamanho do arquivo:
```powershell
Get-Item "assets\profile.jpg" | Select-Object Name, Length
```

### 3. Testar localmente:
- Abra `index.html` no navegador
- Veja se a foto aparece no lugar do placeholder

### 4. Verificar no GitHub Pages:
- Aguarde 2-3 minutos após o push
- Acesse: https://felipedelmondes.github.io/Portifolio/

## Troubleshooting:

- **Foto não aparece:** Verifique nome exato `profile.jpg`
- **Erro 404:** Confirme se está na pasta `assets/`
- **Não carrega:** Verifique tamanho (max 2MB recomendado)

## Dica:
Sua foto ficará linda no portfólio! Pose profissional perfeita! 📸✨