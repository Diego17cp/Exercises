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

def filter_by_char(char, list):
    count = 0
    for i in list:
        if i[0] == char:
            count += 1
    return count
print(f'There are {filter_by_char(char='c', list=['car', 'flower', 'mouse', 'keyboard', 'cast'])} words that starts with "C"\n')

def get_factorial(n):
    i = 1
    f = 1
    while i <= n:
        f *= i
        i += 1

        if n < 0: return print('Error: Cannot calc factorial of negative numbers')
        if n == 0: return print('The factorial of 0 is 0')
        if n == 1: return print('The factorial of 1 is 1')
    return f
print(f'The factorial of 5 is: {get_factorial(5)}')