# Gráfico de Barras

# importar dataset vetos_CSONU

library(readxl)
vetos_CSONU <- read_excel("Database/vetos_CSONU.xls")
View(vetos_CSONU)

# importar e carregar o pacote ggplot2

install.packages("ggplot2")
library(ggplot2)

# plotar o gráfico de barras

ggplot(vetos_CSONU, aes(fill=anos, y=pais, x=vetos)) + geom_bar(position="stack", stat="identity")+ 
  labs(title = "Vetos das Potências no CSONU ",
       subtitle = "Fonte: Dyson (2013)",
       x = "Número de Vetos",
       y = "Potências com Poder de Veto")