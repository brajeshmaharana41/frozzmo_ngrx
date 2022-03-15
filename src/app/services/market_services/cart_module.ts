export interface CartResponce {
    count: number
    rows: cart_Item[]
  }
  
  export interface cart_Item {
    id: number
    qty: number
    status: number
    createdAt: string
    updatedAt: string
    productId: number
    userId: number
    createdbyId: number
    Product: Cart_Product
  }
  
  export interface Cart_Product {
    id: number
    code: string
    name: string
    subtitle: string
    generic_name: string
    price: string
    description: string
    packer: string
    item_weight: any
    dimensions: any
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
    modifiedbyId: number
  }
  
  export interface Add_Item {
    qty: number
    productId: number
  }

  export interface Delete_Item {
    productId: number
  }