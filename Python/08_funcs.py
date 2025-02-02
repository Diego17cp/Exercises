def get_mul_table(n=1):
    if n == 0: 
        print(f'Every number multiplied by 0 is 0')
        return
    for i in range(1, 13):
        print(f'{n} * {i} = {n*i}')

get_mul_table(5)

def search_avg(numbers):
    tot = 0
    for n in numbers:
        tot += n
    return tot/len(numbers)

print(f'\nThe avg is {search_avg(numbers=[10, 20, 30, 40, 50])}\n')

def search_max(numbers):
    return max(numbers)

print(f'The max number is: {search_max(numbers=[1, 2, 3, 4, 5])}\n')