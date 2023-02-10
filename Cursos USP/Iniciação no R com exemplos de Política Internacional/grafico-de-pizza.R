# Gráfico de pizza

#importar a vase de dados em excel denominada cinc

library(readxl)
cinc <- read_excel("Database/cinc.xls")
View(cinc)

#mudar o nome da variável cinc com a função fix()

fix(cinc)

#soma o poder de cada país com base em csonu

attach(cinc)

t <- tapply(poder, csonu, sum)

#etiquetas do gráfico

porc <- round(t,2)
rotulos <- paste("(", porc, "%)", sep = "")

#produção do gráfico

pie(t, main="Gráfico Etapa 6 - Poder no CSONU",labels=rotulos, col=rainbow(2), sub="Fonte: COW (2021)", cex.main=1.0, cex.sub=0.5, col.main="darkblue", radius=1.0)
legend(locator(1), legend=rownames(t), fill=c(rainbow(2)), bty="n", cex = 0.8, pt.cex = 1:2, text.font = 2)