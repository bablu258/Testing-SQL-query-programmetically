import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.channels.FileChannel;
import java.util.ArrayList;

public class copyExcelToText {

	public static void main(String[] args) throws IOException {
		
		
        File oldFile; // =new File("grader.xlsx");
        File newFile ;
		
		
        
        
        
        
		
		// read from all file with .text
		File directoryPath = new File("allSQL");
	     StringBuilder str = new StringBuilder ();
	     String contents[] = directoryPath.list();
	      
	      
	      for(int i=0; i<contents.length; i++) {
	         //System.out.println(contents[i]);
	    	  
	    	
	    		 if (i == (contents.length - 1))
		    		 str.append(contents[i]);
		    	 else
		    		 str.append(contents[i]+";");
	    	 
	    	 
	    		 
	      }
		
	    String allFiles =str.toString();
		
		String  [] studentFiles =  allFiles.split(";");
		
		ArrayList<String> allmodifiedData;
		
		for (int i= 0; i< studentFiles.length; i++ )
		{
			System.out.println(i+" "+studentFiles[i]);
			
			if (studentFiles[i].endsWith(".xlsx"))
			{
				oldFile =new File("allSQL//"+studentFiles[i]);
				newFile =new File("allSQL//"+studentFiles[i]+".txt");
				copyFileUsingNIO(oldFile,newFile);
				
			      FileWriter myWriter = new FileWriter(newFile);
			      
			      String da = "Please check with the solution uploaded in the canvass. Let me know if you have any questions.\r\n" + 
			      		"Points are deducted from the following numbers due to incorrect/incomplete/missing answers: \r\n" + 
			      		"\r\n" + 
			      		"Questions number		deducted points";
			      
			      myWriter.write(da);
			      myWriter.close();
				
			}
			
			
			
			
			
		}

	}
	
	
	
	  private static void copyFileUsingNIO(File sourceFile, File destinationFile) throws IOException {
	        FileInputStream inputStream = new FileInputStream(sourceFile);
	        FileOutputStream outputStream = new FileOutputStream(destinationFile);
	        FileChannel inChannel = inputStream.getChannel();
	        FileChannel outChannel = outputStream.getChannel();
	        try {
	            inChannel.transferTo(0, inChannel.size(), outChannel);
	        } finally {
	            inChannel.close();
	            outChannel.close();
	            inputStream.close();
	            outputStream.close();
	        }
	    }

}
