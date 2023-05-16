function mustBeInteger(req, res, next) {
  
    const id = req.params.id;
    if(!Number.isInteger(parseInt(id))){
        res.status(400).json({message : 'ID must be in int' })

    }else{
        next()
    }
}