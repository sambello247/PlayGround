using System;

namespace GloDataBundleSwitchStatement
{
    class Program
    {
        static void Main(string[] args)
        {
             /* 
                This code demonstrate a practical example of using a C# switch statement for a Glo data bundle subscription in a command-line program. It showcase how the switch mechanism works with the value of the variable (ussdCode) to change the control flow of the program execution via search and map.
            */
            
            Console.WriteLine("What is your name?");
            String userName = Console.ReadLine();

            Console.WriteLine("\r\n\r\nHello, " + userName + " This example demonstrates the practical use of a C# Switch Statement in a interactive command-line program designed for educational purposes only, specifically showcasing Glo data bundle subscription.\r\n\r\n");

            Console.WriteLine("Enter your GLO USSD Code");

            String ussdCode = Console.ReadLine();
            String message = "\r\n\r\nWelcome to Glo Data Bundle! Here are list of Glo Data Bundle you can subscribe to: \r\n\r\n" +
                "1). Glo N100 data plan for 100MB worth of data valid for a day - Press *127*51# \r\n" +
                "2). Glo N200 5 days plan for 262MB data - Press *127*56# \r\n" +
                "3). Glo TGIF weekend plan at the rate of N500 for 3GB data - Press *127*61# \r\n" +
                "4). Glo N500 14 days (2 weeks) data plan for 1GB worth of data - Press *127*57# \r\n" +
                "5). Glo also offers 2GB of data for N1,000 and is valid for 30 days - Press *127*53# \r\n" +
                "6). Glo 4.5GB worth of data at the rate of N2,000 - Press *127*55# \r\n" +
                "7). Glo 7.2GB one-month data bundle at the rate of N2,500 - Press *127*58# \r\n" +
                "8). Glo 8.8GB (one month) data plan for the N3,000 - Press *127*54# \r\n\r\nChoose Your Data Plan NO:";
            String error = "Invalid USSD Code, Try again later";

            ussdCode = (ussdCode == "*301#") ? message : error;

            Console.WriteLine(ussdCode);

            ussdCode = Console.ReadLine();

            switch (ussdCode)
            {
                case "1":
                    Console.WriteLine("\r\nYou've successfully subscribed Glo N100 data plan for 100MB worth of data valid for a day");
                    break;

                case "2":
                    Console.WriteLine("\r\nYou've successfully subscribed Glo N200 5 days plan for 262MB data");
                    break;

                case "3":
                    Console.WriteLine("\r\nYou've successfully subscribed Glo TGIF weekend plan at the rate of N500 for 3GB data");
                    break;

                case "4":
                    Console.WriteLine("\r\nYou've successfully subscribed Glo N500 14 days (2 weeks) data plan for 1GB worth of data");
                    break;

                case "5":
                    Console.WriteLine("\r\nYou've successfully subscribed Glo also offers 2GB of data for N1,000 and is valid for 30 days");
                    break;

                case "6":
                    Console.WriteLine("\r\nYou've successfully subscribed Glo 4.5GB worth of data at the rate of N2,000");
                    break;

                case "7":
                    Console.WriteLine("\r\nYou've successfully subscribed Glo 7.2GB one-month data bundle at the rate of N2,500");
                    break;

                case "8":
                    Console.WriteLine("\r\nYou've successfully subscribed Glo 8.8GB (one month) data plan for the N3,000");
                    break;

                default:
                    Console.WriteLine("Invalid input. Please enter a valid No");
                    break;
            }

    

        }
    }
}
