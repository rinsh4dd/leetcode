using System;

public class Program
{
    public static void Main(string[] args)
    {
        Solution solution = new Solution();

        int n = 10;
        int m = 3;

        int result = solution.DifferenceOfSums(n, m);
        Console.WriteLine($"Difference of sums for n={n}, m={m} is: {result}");
    }
}

public class Solution
{
    public int DifferenceOfSums(int n, int m)
    {
        int div = 0;
        int nonDiv = 0;

        for (int i = 1; i <= n; i++)
        {
            if (i % m == 0)
                div += i;
            else
                nonDiv += i;
        }

        return nonDiv - div;
    }
}
