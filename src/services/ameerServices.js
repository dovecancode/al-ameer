import { createClient } from '@supabase/supabase-js'

class AmeerServices {
  // Create a single supabase client for interacting with your database
  #apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkbnd3dGZ6eWh3dmx5cGVpdW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4NDg1NTksImV4cCI6MjAyMDQyNDU1OX0.oBAO16UtVHh8ld8X02FFeucgLVMgxLKksDx8LMiuaf0'
  #apiUri = 'https://bdnwwtfzyhwvlypeiunp.supabase.co'

  #supabase = createClient(this.#apiUri, this.#apiKey)

  async getData(tableName) {
    let { data, error } = await this.#supabase.from(tableName).select('*')
    return { data, error }
  }
}

export default new AmeerServices()
