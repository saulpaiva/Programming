#Instalar o pacote Rtools no site https://cran.r-project.org/#

#Instalar o pacote rvest: #
#install.packages("rvest")#

#Instalar o pacote chorrrds: #
#install.packages('https://cran.r-project.org/src/contrib/Archive/chorrrds/chorrrds_0.1.9.5.tar.gz',repos=NULL,type='source')#

#Para carregar o pacote:#
#library('nome_do_pacote')#

#Comando para buscar músicas#

install.packages('https://cran.r-project.org/src/contrib/Archive/chorrrds/chorrrds_0.1.9.5.tar.gz',repos=NULL,type='source')
library(chorrrds)

install.packages("tidyverse")
library(tidyverse)

#procura pelos artistas e cria um dataframe aleatório com 10 músicas#

mutantes <- "mutantes" %>% chorrrds::get_songs() %>% dplyr::sample_n(10)
beyonce <- "beyonce" %>% chorrrds::get_songs() %>% dplyr::sample_n(10)
TomJobim <- "tom-jobim" %>% chorrrds::get_songs() %>% dplyr::sample_n(10)
mamonas <- "mamonas-assassinas" %>% chorrrds::get_songs() %>% dplyr::sample_n(10)

mutantes
beyonce
TomJobim
mamonas