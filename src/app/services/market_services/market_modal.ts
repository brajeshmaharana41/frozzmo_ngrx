export interface ProductResponce {
    count: number
    rows: Product[]
  }
  
  
  export interface Product {
      id: number
      code: string
      name: string
      subtitle: string
      generic_name: string
      price: string
      description: string
      packer: string
      item_weight?: string
      dimensions?: string
      net_quantity: string
      included_components: string
      no_of_items: number
      rating: string
      status: number
      createdAt: string
      updatedAt: string
      brandId: number
      categoryId: number
      colorId: number
      createdbyId: number
      modifiedbyId?: number
      Brand: Brand
      Category: Category
      Color: Color
      images: Image[]
      createdby: Createdby
    }
    
    export interface Brand {
      id: number
      name: string
    }
    
    export interface Category {
      id: number
      name: string
    }
    
    export interface Color {
      id: number
      name: string
      colorcode: string
    }
    
    export interface Image {
      id: number
      filename: string
    }
    
    export interface Createdby {
      id: number
      firstName: string
      lastName: string
    }
    export interface Price_mini_max {
      id: number
      name: string
      min: number
      max: number
    }
    