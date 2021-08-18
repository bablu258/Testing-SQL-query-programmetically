import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Scanner;

public class testRun {

	public static void main(String[] args) throws SQLException, IOException {
		
		
		
		queryProcessing run = new queryProcessing ("Bablu Banik");
		
		
		
		
		// get the query
		String expected ="C:\\Users\\bablu\\Desktop\\removeable program\\CreatingSQL\\Expected";
		String actual ="C:\\Users\\bablu\\Desktop\\removeable program\\CreatingSQL\\Actual";
		
		
		 ArrayList ExpectedData = readData (expected);
		 ArrayList ActualData = readData (actual);
		
		 
		 
		 if (ExpectedData.size()==ActualData.size())
		 {
			 for(int i =0; i < ExpectedData.size(); i++ )
				 
			 {
				 String expectedQuery = ExpectedData.get(i).toString();
				 String actalQuery = ActualData.get(i).toString();
				 
				 run.report(expectedQuery, actalQuery);
			 }
				
		 }
		 else
		 {
			 System.out.println("Expected query size : "+ ExpectedData.size());
			 System.out.println("Actual query size : "+ ActualData.size());
			 System.out.println();
			 System.out.println();
			 
			 for(int i =0; i < ExpectedData.size(); i++ )
				 
			 {
				 String expectedQuery = ExpectedData.get(i).toString();
				 String actalQuery = ActualData.get(i).toString();
				 
				 System.out.println("--------- "+i+" ----------\n"+"Expected query : \n"+ expectedQuery+"\n"
						 +"Actual query: \n"+ actalQuery+"\n------------------"+
						 "\n");
				 
			 }
			 
			 if (ActualData.size() > ExpectedData.size() )
			 {
				 int p ;
				 System.out.println("\n\n****** Extra in actual ****\n\n");
				 for (p = ExpectedData.size() - 1 ; p < ActualData.size(); p++ )
					 
				 {
					 String actalQuery = ActualData.get(p).toString();
					 System.out.println("--------- "+p+" ----------\n"+ actalQuery+"\n------------------"+
							 "\n");
				 }
			 }
		 }
		
		
		// end
		
		
		
		
		/*
		 * run.report("SELECT \r\n" + "    region.regionid,\r\n" +
		 * "    region.regionname,\r\n" + "    COUNT(store.storeid) \r\n" + "FROM\r\n" +
		 * "    region\r\n" + "        JOIN\r\n" +
		 * "    store ON store.regionid = region.regionid\r\n" +
		 * "GROUP BY store.regionid;",
		 * 
		 * "SELECT \r\n" + "    region.regionid,\r\n" + "    region.regionname,\r\n" +
		 * "    COUNT(store.storeid) \r\n" + "FROM\r\n" + "    region\r\n" +
		 * "        JOIN\r\n" + "    store ON store.regionid = region.regionid\r\n" +
		 * "GROUP BY store.regionid;");
		 */
		  
		//  run.report("SELECT *  FROM doctorsinfo",
		  //"SELECT *  FROM doctorsinfo LIMIT 2;");
		 
		
		run.CloseConnection();

	}
	
	
	
	public static ArrayList readData (String dataFile) throws IOException
	   {
	      ArrayList data = new ArrayList ();
	      // read data  DataFile
	      
	      
	      
	      
	      try {
	   
	         File myObj = new File(dataFile);
	         Scanner myReader = new Scanner(myObj);
	         
	         StringBuilder singleQuery = new  StringBuilder ();
	         while (myReader.hasNextLine()) {
	            String da = myReader.nextLine();
	            
	            if (! da.startsWith("--"))
	            	
	            {
	            	  if (da.contains(";"))
	  	            {
	  	            	singleQuery.append(da+"\n");
	  	            	data.add(singleQuery.toString());
	  	            	singleQuery.setLength(0);
	  	            }
	  	            else
	  	            {
	  	            	 singleQuery.append(da+"\n");
	  	            }
	            }
	            
	          
	            
	           
	            
	            
	           
	           //System.out.println(data);
	         }
	         
	         
	         
	         myReader.close();
	       } catch (FileNotFoundException e) {
	         System.out.println("An error occurred.");
	         e.printStackTrace();
	       }
	      
	      
	      

	      return data;
	   }

}
