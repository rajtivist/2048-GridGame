export function swiperight(grid)
{
    for(let i=0;i<grid.length;i++)
    {
        for(let j=1;j<grid[i].length;j++)
        {
            if(grid[i][j]==0)
            {
                for(let k=j;k>0;k--)
                {
                    grid[i][k]=grid[i][k-1];
                    grid[i][k-1]=0;
                }
            }
        }
    }
   
} 




export function swipeleft(grid)
{
    for(let i=0;i<grid.length;i++)
    {
        for(let j=grid.length-2;j>=0;j--)
        {
            if(grid[i][j]==0)
            {
                for(let k=j;k<grid.length-1;k++)
                {
                    grid[i][k] = grid[i][k+1];
                    grid[i][k+1] =0;
                }
            }
        }
    }
  
}

export function swipedown(grid)
{
    for(let i=0;i<grid.length;i++)   //starting from 1 
    {
        for(let j=1;j<grid.length;j++)
        {
            if(grid[j][i]==0)
            {
                for(let k=j;k>0;k--)
                {
                grid[k][i] =grid[k-1][i];
                grid[k-1][i] = 0;
                }
            }
        }   
    }

}



export function swipeup(grid)
{
    for(let i=0;i<grid.length;i++)
    {
        for(let j=grid.length-2;j>=0;j--)
        {
            if(grid[j][i]==0)
            {
               for(let k=j;k<grid.length-1;k++)
               {
                    grid[k][i] =grid[k+1][i];
                    grid[k+1][i]=0;
               } 
            }
        }
    }
    
}



