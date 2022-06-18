//
public static void main(String[] args)

public static void fibonacci() {

array [] = new int[2];



/* public static void Euclides(int m, int n) {
    if (m == 0) {
        return n;
    }
    return Euclides(n % m, m);


} */ 

//function ackermann con recursividad
/* 
public static void ackermann(int m, int n) {
    if (m == 0) {
        System.out.println("El ackermann de " + m + " y " + n + " es " + n);
    } else if (m > 0 && n == 0) {
        ackermann(m - 1, 1);
    } else if (m > 0 && n > 0) {
        ackermann(m - 1, ackermann(m, n - 1));
    }
} */
 

/* //impresion de un arreglo de izquierda a derecha con recursividad

public static void imprimir (int [] A, int n){
    if (n != 0){
        imprimir(A, n-1);
        System.out.println(A[n-1]);
    }
} */


//catalan con recursividad

/* public static int catalan(int n) {
    if (n == 1){
        System.out.println("Esto es un catalan de " + n + " es 1");
    } else if (n > 1) {
        for (int i = 0; i < n; i++) {
            catalan(i);
            catalan(n - i - 1);
        }
        System.out.println("Esto es un catalan de " + n + " es " + (2 * (2 * n - 1) / (n + 1)));

    }
} */


//Elabora un programa recursivo que invierta el orden de una cadena de caracteres, por ejemplo, si la cadena de caracteres es AMOR, el resultado que debe arrojar es ROMA.

/* public static void palindroma(String s) {
    if (s.length() == 0) {
        System.out.println("La palabra es palindroma");
    } else if (s.length() == 1) {
        System.out.println("La palabra es palindroma");
    } else if (s.length() > 1) {
        if (s.charAt(0) == s.charAt(s.length() - 1)) {
            palindroma(s.substring(1, s.length() - 1));
        } else {
            System.out.println("La palabra no es palindroma");
        }
    }
}
 */
