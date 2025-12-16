# Bootstrapping The Terms Structure With A Few Hundred Bonds

**Chapter Four of the volume Basic Concepts of Fixed Income**

**Key Topics Covered**

* **Using the bond pricing formula:**  
  * Bond prices as one-dimensional array  
  * Zero prices or present value factors as one-dimensional arrays  
  * Bond payoffs as two-dimensional arrays.  
  * Estimating the term structure with many bonds  
  * Apparent bond pricing errors.  
* **Python concepts:**  
  * NumPy arrays- especially the linalg module   
    * linalg function <font color='green'>matrix_rank</font>  
    * linalg function <font color='green'>lstsq</font>  
  * Pandas DataFrames  
    * method <font color='green'>lread_excel</font>  
    * method <font color='green'>applyl</font>  
  * Custom modules.  
    * <font color='green'>one_y_axis</font>  
    * <font color='green'>accrued_interest</font>  
    * <font color='green'>create_payoff_matrix</font>

    

## **Background**

This chapter's examples and discussions rely on the **Pandas,** **NumPy,** and **datetime** libraries.

* **Pandas** is introduced in [*A Quick Introduction to Pandas*](https://patrickjhess.github.io/Introduction-To-Python-For-Financial-Python/An_Introduction_To_Pandas.html#a-quick-introduction-to-pandas).  
* **NumPy** is introduced in [*A Quick Introduction to NumPy*](https://patrickjhess.github.io/Introduction-To-Python-For-Financial-Python/An_Introduction_To_NumPy.html#a-quick-introduction-to-numpy).  
* The <font color='green'>accrued_interest</font> is imported from [Chapter Two](https://patrickjhess.github.io/Vol-3-Chap-2-Chap-3/Chapter_Two_Highlights.html#accrued-interest)  
* The *Using the linalg module of NumPy* notebook of this chapter provides examples of using the **linalg** module of NumPy  
* The aptly titled notebook  *Creating the payoff matrix* notebook of this chapter develops the <font color='green'>create_payoff_matrix</font> function.  
* Additional relevant Python concepts can be found in the introductory volume, [*Background Material: An Introduction to Python for Financial Python*](https://patrickjhess.github.io/Introduction-To-Python-For-Financial-Python/intro.html), that relate to this and other chapters of *Basic Concepts of Fixed Income*.

**The chapter includes five  sections:**

1. *Inferring zero prices from the present value function*  demonstrates how to estimate zero prices or present value factors from a sample of bonds.  
2. The  Jupyter notebook *Using the linalg module of NumPy* illustrates the calculations of  *Inferring zero prices from the present value function*  with the **l**inalg module.  
3. The  Jupyter notebook *Bootstrapping the term structure with 304 bonds*:  
   * downloads data of 304 coupon bonds from DropBox.  
   * calculates the transaction prices.  
   * calculate the payoff matrix.  
   * estimte the term structure  
   * predicits the bond prices with the estimated term structure   
   * an exercise asking you to calculate the forward rates of interest for four periods.  
4. *The term structure and financial analysis.* summarizes how the term structure is used to make financial decisions.  
5. *Functions Imported by Bootstrapping The Terms Structure of Interest Rates*  describes the function imported from DropBox (*module_basic_concepts_fixed_income*).
```{tableofcontents}
```
