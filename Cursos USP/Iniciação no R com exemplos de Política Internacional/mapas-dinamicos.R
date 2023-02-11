#  Mapas Dinâmicos - Empréstimo BNDES e Cooperação Brasileira - Reservas e Produção de Petróleo

# Importa a base de dados 'mapa'

library(readxl)

br <- read_excel("Database/mapa.xls", col_types = c("text","text","numeric","numeric"))
View(mapa)

#Instalação de alguns pacotes - nem todos vão ser usados, mas esses pacotes oferecem muita opção para explorar

install.packages(c("raster", "dplyr", "spData", "spDataLarge", "sf"))
install.packages(c("leaflet", "shiny"))
install.packages("readxl")
install.packages("htmlwidgets")
install.packages("magick")
install.packages("here")
install.packages("tmap")
install.packages("ggplot2")
install.packages("gifski")

# Convocação dos pacotes

library(dplyr)
library(spData)
#library(spDataLarge)
library(tmap)
library(readxl)
library(htmlwidgets)
library(magick)
library(here)
library(leaflet) 
library(ggplot2) 
library(shiny)   
library(sf)
library(raster)

# convocar o mapa mundi

world = map_data("world")

# ordena os nomes dos países nas duas bases

# A variável “ iso_a3” é um padrão de nomes de países da base do COW (Correlates of War)
World <- World[order(World$iso_a3),]
br <- br[order(br$iso_a3),]

# junta as bases de dados

br_2 <- merge(World, br)

# cria o mapa com duas variáveis

tm_shape(br_2) +
  tm_polygons("loans_2", style = "fixed",breaks = c(1, 309, 2800, 7127, 15783,
                                                    24360, 34811), textNA = "No Loans", colorNA = "white", title = "BNDES
Loans(100 thousands R$)") +
  tm_symbols(col = "black", style="jenks", border.col = "white", size = "coop_2",
             scale=1.0, title.size = "Bilateral Cooperation(100thousands R$)")+
  tm_layout(legend.outside = TRUE)

# Importa a base 'reservas'

reservas <- read_excel("Database/reservas.xls", col_types = c("numeric","numeric","numeric","numeric","text", "numeric","numeric","numeric","numeric"))
View(reservas)

# checa os nomes dos países no mapa "World" e base de dados "reservas"

identical(World$name, reservas$name)

# ordenar

World <- World[order(World$name),]
reservas <- reservas[order(reservas$name),]

# junta as bases de dados

map <- merge(World, reservas)

# cria um mapa dinâmico em html

petro=tm_shape(map) +
  tm_polygons("p_2016", title = "Produção Petróleo") +
  tm_symbols(col = "black", border.col = "white", size = "r_2016", scale=1.2)
tmap_save(tm = petro, filename =
            "petroleo.html", width =
            1200, height = 1000)

# cria um gif com os mapas

# importa a base de dados reservas_din

reservas_din <- read_excel("Database/reservas_din.xls", col_types = c("text", "numeric","numeric","numeric"))
View(reservas_din)

# merge

identical(World$name,reservas_din$name)
World <- World[order(World$name),]
reservas_gif <- reservas_din[order(reservas_din$name),]
map2 <-merge(World, reservas_gif)

# criação de 4 mapas, um para cada década

petroleo_gif = tm_shape(map2) + tm_polygons("producao") + tm_dots(size ="reservas") +
  tm_facets(along = "year", free.coords = FALSE, ncol = 1, nrow=1, as.layers = TRUE, free.scales.symbol.size = FALSE)

# nessa etapa, instale o programa que permite ao R fazer gifs: https://imagemagick.org/script/download.php

tmap_animation(petroleo_gif, filename =
                 "petroleo_2.gif", delay =
                 100, width = 1800, height = 1000)

# realizar os 4 mapas utilizados anteriormente para fabricar o gif, mas agora em uma folha apenas, em mapa dinâmico

petroleo_decada = tm_shape(map2) + tm_polygons("producao") + tm_dots(size =
                                                                       "reservas") +
  tm_facets(by = "year", free.coords = FALSE, ncol = 2, nrow=2, as.layers =
              FALSE, free.scales.symbol.size = FALSE)
petroleo_decada