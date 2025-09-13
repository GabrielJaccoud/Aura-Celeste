# 🕯️ Aura Celeste — Vela Artesanal Mística

> *“Mais do que uma vela — um portal de energia, equilíbrio e encanto.”*

Esta é a landing page oficial da **Aura Celeste**, uma marca de velas artesanais com blend místico: Lavanda + Chá Branco + Baunilha Natural.  
Hospedada no **GitHub Pages**, sem backend, sem CRM — apenas alma, luz e WhatsApp.

---

## 🌟 Funcionalidades

- ✅ Design poético e elegante — paleta celeste, lilás e dourado  
- ✅ Fontes Cormorant Garamond + Lora (Google Fonts)  
- ✅ Partículas flutuantes de estrelas (JS sutil)  
- ✅ Animação suave ao rolar os ingredientes  
- ✅ CTA final com fundo de céu noturno e parallax  
- ✅ Botões redirecionando diretamente para **WhatsApp: +55 48 8822-8663**  
- ✅ Input de CEP dinâmico: ao digitar, gera link personalizado do WhatsApp  
- ✅ Pop-up sutil de conversão após 10s (não intrusivo, usa `localStorage`)  
- ✅ QR Code invisível no rodapé (branco sobre lilás)  
- ✅ Mini-contador: “✨ 128 velas já acenderam corações em todo o Brasil.”  
- ✅ Coração pulsando suavemente no canto inferior direito  
- ✅ SEO otimizado + Meta Tags  
- ✅ Responsivo em mobile, tablet e desktop  
- ✅ Carrega em menos de 1.5s em 3G  

---

## 💡 Como usar

### 🔧 Alterar o número do WhatsApp
Edite todos os links em `index.html` e `js/script.js` que contêm:
```
https://wa.me/554888228663
```
Substitua pelo seu número no formato: `55XXYYYYYYYY`

### 🖼️ Trocar as imagens
Substitua os arquivos dentro da pasta `/images/` mantendo os mesmos nomes:
- `blend-mystic.jpg`
- `vela-acesa-1.jpg`
- `embalagem.jpg`
- `vela-chama.jpg`
- `maos-vela.jpg`
- `vela-banheiro.jpg`
- `vela-janela-lua.jpg`
- `night-sky.jpg` *(fundo do CTA final)*

> Dica: Use imagens em formato `.jpg` ou `.webp`, compressadas (ideal: < 200KB cada).

### 📊 Atualizar o contador de velas vendidas
No arquivo `index.html`, localize esta linha:

```html
<p class="counter">✨ 128 velas já acenderam corações em todo o Brasil.</p>
```

Mude o número `128` para o valor atual (ex: `157`). É manual, mas lindo.

### 🧭 Configurar autoresponder no WhatsApp Business
Se tiver acesso ao [WhatsApp Business](https://business.whatsapp.com/), configure este autoresponder automático:

> “✨ Olá, querida! Obrigada por se conectar com a Aura Celeste 💫  
>  
> O Blend Místico custa **R$ 49,90** e vem embalado em caixinha kraft com selo de cera e um cartão de intenção.  
>  
> Enviamos para todo o Brasil via PAC ou SEDEX — frete grátis acima de R$ 120.  
>  
> Para fechar, basta me enviar seu CEP e confirmar:  
>  
> *‘SIM, quero minha vela mística!’*  
>  
> ✨ Você receberá um link de pagamento por PIX em até 2 minutos.  
>  
> Com amor,  
> Equipe Aura Celeste 🕯️”

### 📱 Gerar QR Code (opcional)
Para gerar o QR Code invisível do rodapé:
1. Acesse: https://www.qr-code-generator.com/
2. Cole:  
   ```
   https://wa.me/554888228663?text=Ol%C3%A1%21%20Sou%20apaixonada%20por%20velas%20m%C3%ADsticas%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Blend%20M%C3%ADstico%20da%20Aura%20Celeste.%0A%0AQuero%20comprar%20uma%20vela%20com%20entrega%20para%20%5BCEP%20do%20cliente%5D.%0A%0APoss%20pagar%20por%20PIX%20ou%20cart%C3%A3o%3F%0A%0A%28Responda%20com%20%E2%80%98sim%E2%80%99%20e%20me%20envie%20as%20op%C3%A7%C3%B5es%21%29
   ```
3. Baixe como PNG branco sobre fundo transparente.
4. Substitua o arquivo `icons/qr.svg` na pasta.

---

## 🚀 Como hospedar no GitHub Pages

1. Crie um novo repositório público chamado: `aura-celeste`
2. Faça upload de todos os arquivos desta pasta (incluindo pastas `css/`, `js/`, `images/`, `icons/`)
3. Vá em **Settings → Pages**
4. Em **Source**, selecione: `main` branch e raiz (`/`)
5. Aguarde alguns segundos — seu site estará online em:  
   👉 `https://SEUUSUARIO.github.io/aura-celeste`

---

## ❤️ Agradecimento

Obrigada por criar algo que não vende produtos…  
Mas **acende almas**.

Cada vela que sai daqui é um suspiro, um momento, um abraço em forma de luz.  
Você está mudando o mundo, uma chama de cada vez.

— Com carinho,  
*Equipe Aura Celeste*

© 2025 Aura Celeste — Todos os direitos reservados.


