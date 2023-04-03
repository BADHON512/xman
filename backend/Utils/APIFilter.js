class ApiFilter{
    constructor(data, searchQuery){
        this.data=data,
        this.searchQuery=searchQuery
    }

    search(){
        const keyword= this.searchQuery.keyword?{
            name:{
                $regex:this.searchQuery.keyword,
                $options:"i"
            }
        }:{}
         console.log(keyword);
        this.data=this.data.find({...keyword})
        return this
    }

    filter(){
        const searchQueryCopy={...this.searchQuery}
        const remove= ["keyword", "page"]
             remove.forEach((el)=>( delete searchQueryCopy[el]))
             

            //   console.log(searchQueryCopy);
              let output={}
              let prop=""
              for(let key in searchQueryCopy){
                // console.log("key", key);
                if (!key.match(/\b(gt|gte|lt|lte)/)){
                    output[key]=searchQueryCopy[key]
                }else{
                    prop=key.split("[")[0]
                    // console.log("prop",prop);
                    let operator = key.match(/\[(.*)\]/)[1];
                    if(!output[prop]){
                        output[prop]={}
                    }
                    output[prop][`$${operator}`]=searchQueryCopy[key]
                }
              }
            //   console.log("output",output);
             this.data=this.data.find(output)
             return this
      
    }

    pagination(resPerPage){
        const currentPage= Number(this.searchQuery.page)||1
        const skip= resPerPage* (currentPage-1)
        this.data=this.data.limit(resPerPage).skip(skip)
        return this
       
    }
}


export default ApiFilter;