
public class graderCalss {
	
	public String name,  question1,  question2 ,question3,  extaCredit, to;
	
	public  graderCalss (String name, String question1, String question2 ,String question3, String extaCredit, String to)
	
	{
		this.name = name;
		this.question1 = question1;
		this.question2 = question2;
		this.question3 =question3;
		this.extaCredit = extaCredit;
		this.to = to;
		
		

		
	}
	
	
	public void run ()
	{
		
		System.out.println();System.out.println();
		System.out.println("****Start **"+this.name+"******");
		System.out.println();System.out.println();
		
		if(this.question1.equalsIgnoreCase("0"))
			System.out.println("You have full credit for the question number 1");
		else
			System.out.println("Due to some error or result mismatch or missing answer, the point "+this.question1+" is deducted.");
		
		if(this.question2.equalsIgnoreCase("0"))
			System.out.println("You have full credit for the question number 2");
		else
			System.out.println("Due to some error or result mismatch or missing answer, the point "+this.question2+" is deducted from the question number 2.");
		
		if(this.question3.equalsIgnoreCase("0"))
			System.out.println("You have full credit for the question number 3");
		else
			System.out.println("Due to some error or result mismatch or missing answer, the point "+this.question3+" is deducted from the question number 3.");
		
		System.out.println();
			
		
		if(this.extaCredit.equalsIgnoreCase("0"))
		{
			this.extaCredit = "0";
		}
		
		else if (this.extaCredit.equalsIgnoreCase("20"))
		{
			System.out.println("*** For extra credit ***");
			System.out.println("You have full credit for the extra credit");
		}
			
		else
		{
			System.out.println("You have full credit for the extra credit");
			System.out.println("Due to some error or result mismatch or missing answer, the point 5 is deducted.");
		}
			
		
		
		System.out.println();
		
		System.out.println("So your total point ");
		int one = (20 - Integer.parseInt(this.question1));
		int two = (20 - Integer.parseInt(this.question2));
		int three = (20 - Integer.parseInt(this.question3));
		int exta = (Integer.parseInt(this.extaCredit));
		
		
		System.out.println("for question number 1 is "+ one);
		System.out.println("for question number 2 is  "+ two);
		System.out.println("for question number 3 is  "+ three);
		System.out.println("for extra credit question  is  "+ exta);
		System.out.println("-------------------------------------");
		int total = one+two+three+exta;
		System.out.println("Total : "+ total);
		
		System.out.println();
		System.out.println("Not needed to paste for students ");
		System.out.println();
		
		
		if (String.valueOf(total).equalsIgnoreCase(this.to))
			System.out.println("Calculation is good");
		else
			System.out.println("Calculation is bad, Expected "+ this.to + " and actual "+total);
			
		
		
		System.out.println("****end **"+this.name+"******");
	}

}
