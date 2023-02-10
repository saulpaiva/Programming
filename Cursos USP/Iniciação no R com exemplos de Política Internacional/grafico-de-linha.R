# Gráfico de linha

# importar dataset tropas_ONU

library(readxl)
tropas_ONU <- read_excel("Database/tropas_ONU.xls")
view(tropas_ONU)

# usando a função attach

attach(tropas_ONU)

# plotar o gráfico de linha

# a função lwd altera a espessura da linha do gráfico
plot(ano, tropas, type = "o", col = "darkblue", xlab = "Anos", ylab = "Tropas", main = "Tropas na ONU por ano", lwd = 3)