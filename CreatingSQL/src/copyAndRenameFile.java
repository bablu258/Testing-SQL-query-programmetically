import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;
import java.util.ArrayList;

public class copyAndRenameFile {

	public static void main(String[] args) throws IOException {
		
		
        File oldFile =new File("grader.xlsx");
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
		
		String previousFile = "xxxxxxxxx";
		
		for (int i= 0; i< studentFiles.length; i++ )
		{
			/*
			if (previousFile.subSequence(0, 3).toString().equalsIgnoreCase(studentFiles[i].substring(0, 3).toString()))
				System.out.println("\"C:/Users/bablu/Desktop/gradding 6/submissions/"+studentFiles[i]+"\",");
				
			else
			{
				
				System.out.println();System.out.println();
				previousFile = studentFiles[i];
				System.out.println("\"C:/Users/bablu/Desktop/gradding 6/submissions/"+studentFiles[i]+"\",");
			}
				*/
			
			//newFile =new File("allSQL//"+studentFiles[i]+".xlsx");
			
			
			//copyFileUsingNIO(oldFile,newFile);
			
			System.out.println(studentFiles[i].substring(0, 8).toString());
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
