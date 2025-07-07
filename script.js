
function orderProduct(productName) {
    const whatsappNumber = 'YOUR_PHONE_NUMBER';
    const url = `https://wa.me/${whatsappNumber}?text=Сәлеметсіз бе! Маған ${productName} керек еді.`;
    window.open(url, '_blank');
}
