def get_mul_table(n=1):
    if n == 0: 
        print(f'Every number multiplied by 0 is 0')
        return
    for i in range(1, 13):
        print(f'{n} * {i} = {n*i}')

get_mul_table(5)