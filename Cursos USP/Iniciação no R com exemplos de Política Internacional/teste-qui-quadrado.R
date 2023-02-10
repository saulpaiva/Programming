# Teste do Qui-Quadrado (Entrada da Venezuela no MERCOSUL em 2007)

# Importação do banco

library(foreign)
Venezuela <- read_xls("Database/Entrada_Venezuela_CN.xls")

# Criar labels para as variáveis do banco de dados venezuela

venezuela$Ideologia <- factor(venezuela$Ideologia,
                              levels = c(0,1),
                              labels = c("Direita", "Esquerda"))

venezuela$Coalizão <- factor(venezuela$Coalizão,
                             levels = c(0,1),
                             labels = c("Oposição", "Governo"))

venezuela$Voto <- factor(venezuela$Voto,
                         levels = c(0,1),
                         labels = c("Não", "Sim"))

attach (Venezuela)

# Geração de uma tabela t1 2x2 e um gráfico de barras

t1 = table(Voto,Ideologia)
barplot(t1, beside=TRUE, legend=TRUE, ylim=c(0,200),main="Gráfico 1.
Aprovação Entrada da Venezuela no MERCOSUL por Ideologia")

# Estimação do Qui-quadrado

chisq.test(t1)

# Criar tabela t2 e gráfico de barras

t2 = table(Voto,Coalizão)
barplot(t2, beside=TRUE, legend=TRUE, ylim=c(0,300) , args.legend = list(bty ="n", x = "top", cex=2.0, ncol = 2), main="Gráfico 2. Aprovação Entrada da Venezuela no MERCOSUL por Coalizão")

# Qui-quadrado voto vs coalizão

chisq.test(t2)