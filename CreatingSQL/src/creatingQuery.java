import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class creatingQuery
{

   public static void main(String[] args) throws IOException
   {
      ArrayList data = readData ();
      
      String tableName = "supervisors";
      
      // insert statement
      
      for (int i = 0; i < data.size(); i ++)
      {
         // INSERT INTO security VALUES ('DU','Downtown Utlity','Bond');
         String firstPart = "INSERT INTO "+ tableName+" VALUES (";
         String endPart = ");";
         String temData = data.get(i).toString();
         String []dataLine = temData.split("\t");
         StringBuilder st = new StringBuilder();
               
         for (int p = 0; p < dataLine.length; p++ )
         {
            if (p == (dataLine.length -1 ))
               st.append("'"+dataLine[p]+"'");
            else
               st.append("'"+dataLine[p]+"',");
         }
         
         String finalReturn = firstPart+st.toString()+endPart;
         System.out.println(finalReturn);
      }

   }




   public static ArrayList readData () throws IOException
   {
      ArrayList data = new ArrayList ();
      // read data  DataFile
      
      
      
      
      try {
    	  String fi = "C:\\Users\\bablu\\Desktop\\CST363 Introduction"
    	  		+ " to Database Systems\\3\\DataFile.txt";
         File myObj = new File(fi);
         Scanner myReader = new Scanner(myObj);
         while (myReader.hasNextLine()) {
            String da = myReader.nextLine();
           data.add(da);
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