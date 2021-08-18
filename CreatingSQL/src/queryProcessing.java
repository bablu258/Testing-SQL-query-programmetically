//STEP 1. Import required packages
import java.sql.*;
import java.util.ArrayList;
public class queryProcessing {
	
	
	   // JDBC driver name and database URL
	   static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
	   static final String DB_URL = "jdbc:mysql://localhost:3306/zagimore";

	   //  Database credentials
	   static final String USER = "root";
	   static final String PASS = "Newlife@123";
	   
	   // 
	   public Connection conn = null;
	   public Statement stmt = null;
	   
	   public ArrayList<String> putResultA = new ArrayList () ;
	   public ArrayList<String> putResultB = new ArrayList () ;;
	  
	   
	   
	   public queryProcessing (String name) throws SQLException
	   {
		   getConnection (); 
		   
		   System.out.println("~~~~~~~~ Report "+name+" starts here ~~~~~~~~\n\n"); 
	   }
	   
	   public void getConnection () throws SQLException
	   {
		 //STEP 3: Open a connection
		     // System.out.println("Connecting to database...");
		      conn = DriverManager.getConnection(DB_URL,USER,PASS);

		      //STEP 4: Execute a query
		     // System.out.println("Creating statement...");
		      stmt = conn.createStatement();
	   }
	   
	   
	   
	   public void CloseConnection () throws SQLException
	   {
		      
		      //STEP 6: Clean-up environment
		      stmt.close();
		      conn.close();
		      
		      
		      System.out.println("\n\n~~~~~~~~ Report ends here ~~~~~~~~"); 
	   }
	   
	   public boolean runQuery (String expectedQuery, String ActaulQuery ) throws SQLException
	   {
		   
		      String sql;
		      ResultSet rs = null;
		      ResultSet rsa = null;
		      boolean boolval = true;
		      
		      String temEXpected = expectedQuery.toLowerCase().trim();
		      String temAtual = ActaulQuery.toLowerCase().trim();
		      
		      if (temEXpected.startsWith("select") && 
		    		  temAtual.startsWith("select"))
		    	  
		      {
		    	     sql = expectedQuery;
				      rs = stmt.executeQuery(sql);
				     putResultA = ResultSetPropertiesSimplifyHelps.putResult(rs, String.class);
				      
				     sql = ActaulQuery;
				     rsa = stmt.executeQuery(sql);
				     putResultB = ResultSetPropertiesSimplifyHelps.putResult(rsa, String.class);
				     
				     boolval = putResultA.equals(putResultB); //returns true because lists are equal  
				      //System.out.println(boolval); 
				     
				     //STEP 6: Clean-up environment
				      rs.close();
				      rsa.close();
				      
		      }
		 
		      
		      return boolval;
		   
	   }
	   
	   
	   public void report (String expectedQuery, String ActaulQuery) throws SQLException
	   {
		   if (runQuery(expectedQuery,ActaulQuery) == true)
		   {
			   System.out.println("\n******************\n"
			   		+ "Expected query : \n------------------"
			   		+ "\n"+ expectedQuery +"\n\n"+
					   "Actual query : \n------------------"
					   + "\n"+ActaulQuery +"\n"+
					   "\n### And their outputs are same.");
			   
			   
			   if (!putResultA.isEmpty())
			   {
				   putResultA.clear();
				   putResultB.clear();
			   }
			  
		   }
		   
		   else
		   {
			   System.out.println("\n******************\n"
				   		+ "Expected query : \n------------------"
				   		+ "\n"+ expectedQuery +"\n\n"+
						   "Actual query : \n------------------"
						   + "\n"+ActaulQuery +"\n"+
						   "\n### And their outputs are not same.");
			   
			   System.out.println("\nExpected output ");
			   System.out.println("---------------------");
			   for (int i = 0; i < putResultA.size(); i++) {
			         System.out.println(putResultA.get(i).toString());
			      
			      }
			   
			   
			   System.out.println("\nActual output ");
			   System.out.println("---------------------");
			   for (int i = 0; i < putResultB.size(); i++) {
			         System.out.println(putResultB.get(i).toString());
			      
			      }
			   
			   
			   putResultA.clear();
			   putResultB.clear();
			   
			   
		   }
	   }

}
