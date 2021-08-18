import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class runGradingForMongo {

	public static void main(String[] args) {
		 
	      try {
	    	  String fi = "Actual";
	         File myObj = new File(fi);
	         Scanner myReader = new Scanner(myObj);
	         while (myReader.hasNextLine()) {
	            String da = myReader.nextLine();
	            
	            String [] data = da.split("\t");
	            
	            String name = data[0],  question1 = data[1],  question2 = data[2] ,question3 = data[3],  extaCredit = data[4], to = data[5];
	            
	            graderCalss grade = new graderCalss (name,question1,question2,question3,extaCredit,to);
	            grade.run();
	            
	            
	          
	         }
	         myReader.close();
	       } catch (FileNotFoundException e) {
	         System.out.println("An error occurred.");
	         e.printStackTrace();
	       }

	}

}
