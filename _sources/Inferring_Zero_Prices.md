
## **Inferring zero prices from the present value function**

The present value of a bond maturing in T periods is:

$$\text{Bond Value} = \sum_{t=1}^{T-1}\text{PV(t)}\times \text{Coupon} + \text{PV(T)}\times (\text{Principal + Coupon})$$

<br>

where $\text{PV(t)}$ is the present value factor at time $t$. The present value factor at $T$ is solved for by rearranging the $\text{Bond Value}$ equation:

$$\large \text{PV(T)} = \frac{\text{Bond Value} - \sum_{t=1}^{T-1}\text{PV(t)}\times \text{Coupon}}{\text{Principal + Coupon}}$$

<br>

This formula allows for the recursive calculation of present value factors (zero prices), beginning with the shortest maturity and progressively solving for factors at longer maturity dates.

### **Two bond example-recursive solution**

Consider two bonds:

1. A bond that pays \\$100 in six months and sells for \$97.50.  
2. A bond that matures in one year, pays a semi-annual \$2 coupon, and sells for \$100.

The present value factor for six months, $\text{PV(0.5)}$, is the ratio of the price to the final payment for the first bond:

<br>

$$\text{PV(0.5)} =\frac{97.5}{100} = 0.975$$

<br>

We can then use this six-month present value factor and the price of the one-year bond to infer the one-year present value factor, $\text{PV(1)}$. The one-year bond's price (\$100) must equal the present value of its two cash flows: the first coupon (\$2) and the final payment $\text{(coupon + principal=\$102).}$

<br>

$$\$100 = 2 \times \text{PV}(0.5) + 102 \times \text{PV}(1)$$

Solving for $\text{PV(1)}$:

$$\text{PV}(1) = \frac{100 - (0.975 \times 2)}{102} = 0.9613$$

<br>

One might initially think this recursive approach could be used to build the complete term structure. However, while straightforward, this method is not well-suited for reliably deducing the entire term structure from a set of bond prices. To understand why this approach is problematic and to develop a more effective method, we must first reframe the problem as a system of equations.


### **Two bond example-as two equations and two unknowns**

Here we describe how to determine zero-coupon bond prices (or present value factors) using the prices and cash flows of one-period and two-period coupon bonds; a common technique in finance known as bootstrapping.

The values of the two bonds are first expressed as a system of two linear equations:

<br>

1.   $97.5 = 100\times \text{PV(0.5)}$
2.   $100 = 2\times \text{PV(0.5)} + 102\times \text{PV(1)}$

<br>

These equations can be represented in matrix form:

<br>

$\text{Bond Values} = \text{Payoffs} \times \text{Zero Prices}$

1.  $\text{Bond Values} =\begin{pmatrix}
97.5  \\
100  \\
\end{pmatrix}
$

2.   $\text{Zero Prices}\hspace{.4cm}=\begin{pmatrix}
PV(0.5)  \\
PV(1)  \\
\end{pmatrix}$

3.   $\text{Payoffs} \hspace{1.15cm}=\begin{pmatrix}
100 &0  \\
2 &102  \\
\end{pmatrix}$   

<br>

$\Large\begin{pmatrix}
97.5  \\
100  \\
\end{pmatrix}= \begin{pmatrix}
100 &0  \\
2 &102  \\
\end{pmatrix}
\times\begin{pmatrix}
PV(0.5)  \\
PV(1)  \\
\end{pmatrix}$

<br>
<br>

The goal is to solve for the $\text{Zero Prices}$ array. Since the $\text{Payoffs}$ array is a square matrix, we can use its inverse to solve the system of equations. The inverse of the $\text{Payoffs}$ matrix is:

<br>
<br>


$$\text{Payoffs}^{-1} = \Large\begin{pmatrix}
100 &0  \\
2 &102  \\
\end{pmatrix}^{-1} = \begin{pmatrix}
\frac{1}{100} &0  \\
\frac{-2}{100\times 102} &\frac{1}{102}  \\
\end{pmatrix} $$

<br>
<br>

Multiplying both sides of the matrix equation by the inverse of the $\text{Payoffs}$ matrix allows us to solve for the $\text{Zero Prices}$:

<br>

$$\Large\begin{pmatrix}
\frac{1}{100} &0  \\
\frac{-2}{100\times 102} &\frac{1}{102}  \\
\end{pmatrix}\times\large \begin{pmatrix}
97.5  \\
100  \\
\end{pmatrix}=\begin{pmatrix}
\ 1 &0  \\
\ 0 & 1  \\
\end{pmatrix}\times\begin{pmatrix}
\text{PV(0.5)}  \\
\text{PV(1)}  \\
\end{pmatrix}
$$

<br>

The first zero price factor, $\text{PV(0.5)}$, is calculated by multiplying the first row of the inverse matrix into the $\text{Bond Values}$ vector:

$$\text{PV(0.5)} = \frac{1}{100} \times 97.5 + 0 \times 100 = \frac{97.5}{100} = 0.975$$

<br>

The second zero price factor, $\text{PV(1)}$, is calculated by multiplying the second row of the inverse matrix into the $\text{Bond Values}$ vector:<br>


<br>

$$
PV(1) = \frac{-2}{100 \times 102} \times 97.5 + \frac{1}{102} \times 100 = \frac{100 - 2 \times PV(0.5)}{102} = \frac{100 - 2 \times 0.975}{102} = \frac{98.05}{102} \approx 0.9613$$

<br>

Results that are identical to the two-bond recursive solution.

<br>

### **Adding a zero-coupon bond with a maturity of one year and a price 0f \\$96.**

We now have three equations and two unknowns.  Importantly notice that the $\text{Payoffs}$ array has more rows than columns (not square or invertible).

<br>

1.  $\text{Bond Values} =\begin{pmatrix}
97.5  \\
100  \\
96  \\
\end{pmatrix}$


2.   $\text{Zero Prices} \hspace{.49cm}=\begin{pmatrix}
PV(0.5)  \\
PV(1)  \\
\end{pmatrix}$

3.   $\text{Payoffs} \hspace{1.6cm}=\begin{pmatrix}
100 &0  \\
2 &102 \\
0 & 100
\end{pmatrix}$   

<br>
<br>

$\large\begin{pmatrix}
97.5  \\
100  \\
96   \\
\end{pmatrix}= \begin{pmatrix}
100 &0  \\
2 &102  \\
0 & 100 \\
\end{pmatrix}
\times\begin{pmatrix}
PV(1)  \\
PV(2)  \\
\end{pmatrix}$

<br>
<br>

With three equations and two unknowns, there are three possible solutions:



1.   The solution already achieved with the six-month and twelve month coupon bond.
2.   A solution with the six-month bond and the one-year zero-coupon bond.
3.   A solution with the coupon one-year bond and the one-year zero-coupon bond.

The system is overdetermined.  The solution, however, can be found using least-squares estimation.

### **Least-Squares solution**

To solve this overdetermined system, we utilize the transpose of the Payoffs matrix, a common technique for finding the least-squares estimates.
The transpose of the Payoffs Matrix is denoted as $\text{Payoffs}^{T}$. The following steps describe the least-squares technique:

1.  The transpose swaps the rows and columns:<br><br>$\text{Payoffs}^{T}=\begin{pmatrix}
100 & 2 &0  \\
0 &102 & 100 \\
\end{pmatrix}
$

2.  The product of the transpose and the original payoff matrix:<br><br>$\begin{pmatrix}
100 & 2 &0  \\
0 &102 & 100 \\
\end{pmatrix}\times\begin{pmatrix}
100 &0\\
2 & 102\\
0 & 100\\
\end{pmatrix}=\begin{pmatrix}
10\,004 & 204\\
204 & 20\,004\\
\end{pmatrix}$<br>
3.  Solve for the present value factors with the product of the inverse and original payoff matrix:<br><br>
 $\begin{pmatrix}
10\,004 & 204\\
204 & 20\,004\\
\end{pmatrix}\times\begin{pmatrix}
97.5  \\
100  \\
96  \\
\end{pmatrix}=\begin{pmatrix}
10\,004 & 204\\
204 & 20\,004\\
\end{pmatrix}\times\begin{pmatrix}
\text{PV(0.5)}\\
\text{PV(1)}\\
\end{pmatrix}
$

4.  Get the solution by multiplying both sides by the inverse of the product of transpose and original payoff matrix:<br><br>$\normalsize\begin{pmatrix}
0.97501\\
0.96064\\
\end{pmatrix}=\begin{pmatrix}
PV(0.5)\\
PV(1)\\
\end{pmatrix}$

<br>

### **Interpretation of the Result**

These estimates are the least-squares estimates, meaning they minimize the squared difference between the actual bond prices and the prices predicted by the estimated $\text{PV(0.5)}$ and $\text{PV(1)}$.
The six-month zero price ($0.97501$) is slightly higher than the value calculated using just the first two bonds.
The one-year zero price ($0.9606$) is slightly lower than the value calculated using just the first two bonds.

The least-squares technique is the standard way of incorporating as many data points (bonds) asfile:///home/pat/Financial_Python/Basic_Concepts_Of_Fixed_Income/Chapter_Four/_build/html/Using_the_linalg_module_of_NumPy.html possible.  All things the same, the more bonds the more reliable is the estimate of the term structure. We'll implement the least-square technique with functions from NumPy's linear algebra module. The notebook *Using the linalg module of NumPy* of this chapter illustrates the use of the module.

