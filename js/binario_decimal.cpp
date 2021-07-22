# include <iostream>
#include <string>
#include <math.h>
// cstdlib is needed for atoi()
#include <cstdlib>


using  namespace std;

int op(int numero) {
	int exp = 0, suma = 0,poww;
	do {
		suma += (numero % 10) * (pow(2, exp));
		numero = numero / 10;
		exp++;
		cout<<suma<<endl;
	} while (numero > 0);
	return suma;
}

int main(int argc, char const *argv[])
{
	cout << op(01010);
}
