#import from excel

library(readxl)
guerras <- read_excel("Database/guerras.xlsx")
View(guerras)

#tabela de frequência

install.packages("summarytools")
library(summarytools)

freq(pais, cumul = TRUE, totals = FALSE, order = "freq")

#medidas de Dispersão e Tendência Central

descr(guerras[ ,6:7], style='rmarkdown')
#descr(guerras[ ,6:7], style='grid')
#descr(guerras[ ,6:7], style='simple')

#criar um subset

brazil<- subset(guerras, pais == "Brazil")

descr(brazil[ ,6:7], style='simple')