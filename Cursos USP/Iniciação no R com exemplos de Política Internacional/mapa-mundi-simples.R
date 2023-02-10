# Mapa Mundi Simples

# instalar e carregar os pacotes necessários

install.packages("foreign")
install.packages ("ggplot2")
install.packages ("ggmap")
install.packages ("reshape2")
install.packages ("maps")
install.packages ("Cairo")

library(foreign)
library(ggplot2)
library(ggmap)
library(reshape2)
library(maps)
library(Cairo)

# importar os dados e função attach

library(readxl)
economia <- read_excel("Database/economia.xls")
view(economia)

attach(economia)

# separar as variáveis “country” e “income_tax_rate” (criar um subset)

econ <- subset(economia, select=c(country, income_tax_rate))

# carregar o mapa mundi do R chamado world

world = map_data("world")

# Utilizar a função merge para unir os objetos econ e world

world1 <- merge (world, econ, by.x="region", by.y="country", all.x=T, all.y=F)

# Reordenar o novo objeto criado

world1 <- world1[order(world1$order),]

# Gerar mapa e legenda

m0 <- ggplot(data=world1)
m1 <- m0 + geom_polygon(aes(x=long, y=lat, group=group, fill= income_tax_rate)) + coord_equal()
m2 <- m1 + geom_path(aes(x=long, y=lat, group=group), color='grey', linewidth=.1) #Using `size` aesthetic for lines was deprecated in ggplot2 3.4.0. Please use `linewidth` instead.#
m3 <- m2 + scale_fill_gradient(low = "lightblue", high = "darkblue")

m3

# exemplo utilizando outra variável socio-econômica (população em milhões)

econ <- subset(economia, select=c(country, population__millions_))

world = map_data("world")

world1 <- merge (world, econ, by.x="region", by.y="country", all.x=T, all.y=F)

world1 <- world1[order(world1$order),]

m0 <- ggplot(data=world1)
m1 <- m0 + geom_polygon(aes(x=long, y=lat, group=group, fill= population__millions_)) + coord_equal()
m2 <- m1 + geom_path(aes(x=long, y=lat, group=group), color='grey', linewidth=.1) #Using `size` aesthetic for lines was deprecated in ggplot2 3.4.0. Please use `linewidth` instead.#
m3 <- m2 + scale_fill_gradient(low = "lightblue", high = "darkblue")

m3