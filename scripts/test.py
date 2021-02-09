from random import randint

first_names = ['Andrés', 'Alberto', 'Manuel', 'Ricardo', 'María', 'Carmen', 'Stefani', 'Andrea']
last_names = ['Betancourt', 'Carrillo', 'Gómez', 'Padilla', 'Rodríguez', 'Pérez', 'Facenda', 'Caceres', 'Camino', 'Ortega']

for i in range(len(first_names)):
    for j in range(len(last_names)):
        print("INSERT INTO persona (nombre, apellido, extranjeria, numero_ci, edad)")
        print("VALUES (\'{}\', \'{}\', \'V\', {}, {});".format(first_names[i], last_names[j], randint(5000000, 30000000), randint(18, 60)))

spaces = ['Jardín', 'Parque', 'Salón', 'Terraza', 'Azotea']

for i in range(2):
    for j in range(len(spaces)):
        print("INSERT INTO areacomun (estado, tipo, numero)")
        print("VALUES (\'Disponible\', \'{}\', {});".format(spaces[j], i + 1))

for i in range(5):
    print("INSERT INTO edificio (nombre_conjunto, numero)")
    print("VALUES (\'Melissa\', {});".format(i + 1))