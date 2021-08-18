import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;





public class SupplementalForSecondSql {

	
	static double totalPoint;
	static double generalDeductionPoint;
	public static void main(String[] args) throws IOException, InterruptedException {
		
		
		
		totalPoint = 20;
		generalDeductionPoint = 2.5;
		
		
		// read from all file with .text
		File directoryPath = new File("allSQL");
	     StringBuilder str = new StringBuilder ();
	     String contents[] = directoryPath.list();
	      
	      
	      for(int i=0; i<contents.length; i++) {
	         //System.out.println(contents[i]);
	    	  
	    	 if (contents[i].endsWith(".txt"))
	    	 {
	    		 if (i == (contents.length - 1))
		    		 str.append(contents[i]);
		    	 else
		    		 str.append(contents[i]+";");
	    	 }
	    	 
	    		 
	      }
		
	    String allFiles =str.toString();
		
		String  [] studentFiles =  allFiles.split(";");
		
		ArrayList<String> allmodifiedData;
		
		for (int i= 0; i< studentFiles.length; i++ )
		{
			//System.out.println(i+" "+studentFiles[i]);
			allmodifiedData = readFile (studentFiles[i]);
			
			
			createOuput (studentFiles[i], allmodifiedData);
			
			//System.out.println(allmodifiedData);
		}
		
	}

	
	
	
	public static void createOuput (String fstudent, ArrayList<String> report) throws IOException, InterruptedException
	{
		String noteTxt = fstudent+"Graded.txt";
		File myObj = new File("allSQL//"+noteTxt);
		myObj.createNewFile();
		Thread.sleep(3333);
		
		 FileWriter myWriter = new FileWriter("allSQL//"+noteTxt);
		 
		 for (int i = 0; i < report.size(); i++)
			{
			 myWriter.write(report.get(i)+"\n");
			}
		 
		 myWriter.write("\n\n ********* \n\n");
		 
		 double count = 0;
		 for (int i = 0; i < report.size(); i++)
			{
			 String exception = report.get(i);
			 if (exception.startsWith("***"))
			 {
				 if (!exception.contains("END Reply"))
				 {
					 
					 
					 if (exception.contains("Student file size is incorrect"))
					 {
						 myWriter.write(report.get(i)+"\n");
						 count = totalPoint ;
					 }
					 
					 else
					 {
						 myWriter.write(report.get(i)+"\n");
						 count = count + generalDeductionPoint ;
					 }
					 
					 
					 
					
				 }
					 
			 }
			 	
			}
		 
		 myWriter.write("\n\n -------- \n\n");
		 
		 myWriter.write("Total point is "+totalPoint +" and deducted point is "+ count + " So your point is "+ (totalPoint  -count)+"\n");
		 
		 myWriter.close();
		 report.clear();
	}
	
	
	//public static void readFile(String filename, ArrayList<String> problems) {

	public static ArrayList<String> readFile(String filename) {
		String curProblem = null;
		int lineno = 0;
		ArrayList<String> getGrade = new ArrayList<String>();
		ArrayList<String> TemGetGrade = new ArrayList<String>();
		
		
		   try {
			      File myObj = new File("allSQL\\"+filename);
			      Scanner myReader = new Scanner(myObj);
			      int counter = 0;
			      boolean start = false;
			      while (myReader.hasNextLine()) {
			    	  
			        String data = myReader.nextLine();
			        System.out.println(data);
			        
			        
			        // add start data 0 to 4
			        if (counter < 5)
			        {
			        	getGrade.add(data);
			        }
			        
			        
			        if (counter > 4)
			        {
			        	
			        	
			        	if (data.equalsIgnoreCase("Solution sql:"))
			        	{
			        		
			        		start = true;
			
			        	}
			        	
			        	if (start == true)
			        	{
			        		TemGetGrade.add(data);
			        	}
			        	
			        	
			        	if (data.equalsIgnoreCase(""))
			        	{
			        		
			        		start = false;
			        		
			        		
			        		
			        		// review this block of data
			        		if (TemGetGrade.contains("*** Results Sets do not agree.  row=1") 
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=2")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=3")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=4")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=5")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=6")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=7")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=8")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=9")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=10")
			        				
			        				|| TemGetGrade.contains("*** Results Sets do not agree.  row=11")
			        				
			        				
			        				)
			        		{
			        			for (int k =0; k < TemGetGrade.size(); k++)
			        			{
			        				String reviewedData = TemGetGrade.get(k);
			        				
			        				if (!reviewedData.startsWith("*** Columns names do not agree.") 
			        						& !reviewedData.startsWith("***EXCEPTION*** Table 'zagimore.vsales'")
			        						& !reviewedData.startsWith("*** Columns counts do not agree."))
			        					getGrade.add(TemGetGrade.get(k));
			        			}
			        			
			        		}
			        		
			        		
			        		TemGetGrade.clear();
			
			        	}
			        	
			        	
			        }
			        
			        
			        if (data.startsWith("End of grading for"))
			        	getGrade.add(data);
			        
			        
			        
			        
			        
			        
			        
			        counter++;
			        
			        
			      }
			      myReader.close();
			    } catch (FileNotFoundException e) {
			      System.out.println("An error occurred.");
			      e.printStackTrace();
			    }
		   
		   return getGrade;
	}
	
	

}
