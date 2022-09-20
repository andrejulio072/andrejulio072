def average(self, salary: List[int]) -> float:
    min=0
    max=0
    for i in range(len(salary)):
    #determinando maximo
            if salary[i-1]<salary[i]:
                max=salary[i]
                #determinando o minimo
            elif salary[i-1] > salary[i]:
                min = salary[i]
        #removendo o min
        salary.remove(min)
        print salary
        #removendo o max
        salary.remove(max)
        print salary

        soma=0
        #somando os elementos
        for num in salary:
            soma+=num
        print soma
        # divindo
        n= len(salary)
        division = soma/n
        print division
        return division
