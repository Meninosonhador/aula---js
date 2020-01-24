let limite, multaporkilo, p, e, m;
limite = 50;
multaporkilo = 4;

p = prompt("Quantos kilos de peixe você pescou?");
e = p - limite;

if (e > 0){
    m = e * multaporkilo;
    document.write("KG Total: " + p);
    document.write("<br>KG Excesso: " + e);
    document.write("<br>Multa: R$ " + m);
}else{
    document.write("KG Total: " + e);
    document.write("<br>Excesso: 0");
    document.write("<br>Multa: R$ 0")

}