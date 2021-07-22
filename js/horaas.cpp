#include <iostream>

using namespace std;

string horas(int nh,int nm) {
	int n=1;
	if (((nh >= 19 and nh <= 20 ) and (nm >= 00 and nm <= 59)) and n == 1) {

		return "true";
	}
	else
	{
		return "false";
	}
}

int main(int argc, char const *argv[])
{
	/* code */
	cout<<horas(21,0);
	return 0;
}


