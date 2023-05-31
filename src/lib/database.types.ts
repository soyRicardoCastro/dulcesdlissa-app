export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      course: {
        Row: {
          banner_image_url: string | null
          category: string | null
          course_id: number
          created_at: string | null
          description: string | null
          name: string | null
          price: number | null
          trailer_video_url: string | null
        }
        Insert: {
          banner_image_url?: string | null
          category?: string | null
          course_id?: number
          created_at?: string | null
          description?: string | null
          name?: string | null
          price?: number | null
          trailer_video_url?: string | null
        }
        Update: {
          banner_image_url?: string | null
          category?: string | null
          course_id?: number
          created_at?: string | null
          description?: string | null
          name?: string | null
          price?: number | null
          trailer_video_url?: string | null
        }
      }
      course_sections: {
        Row: {
          course_id: number
          section_id: number
        }
        Insert: {
          course_id: number
          section_id: number
        }
        Update: {
          course_id?: number
          section_id?: number
        }
      }
      course_users: {
        Row: {
          course_id: number
          user_id: string
        }
        Insert: {
          course_id: number
          user_id: string
        }
        Update: {
          course_id?: number
          user_id?: string
        }
      }
      lesson: {
        Row: {
          created_at: string | null
          lesson_id: number
          resource_id: number | null
          section_id: number
          title: string
        }
        Insert: {
          created_at?: string | null
          lesson_id?: number
          resource_id?: number | null
          section_id: number
          title: string
        }
        Update: {
          created_at?: string | null
          lesson_id?: number
          resource_id?: number | null
          section_id?: number
          title?: string
        }
      }
      resource: {
        Row: {
          created_at: string | null
          file_url: string | null
          lesson_id: number
          resource_id: number
          type: string
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          file_url?: string | null
          lesson_id: number
          resource_id?: number
          type: string
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          file_url?: string | null
          lesson_id?: number
          resource_id?: number
          type?: string
          video_url?: string | null
        }
      }
      section: {
        Row: {
          banner_image_url: string | null
          category: string | null
          course_id: number | null
          created_at: string | null
          description: string | null
          id: number
          name: string
          price: number | null
          trailer_video_url: string | null
        }
        Insert: {
          banner_image_url?: string | null
          category?: string | null
          course_id?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          price?: number | null
          trailer_video_url?: string | null
        }
        Update: {
          banner_image_url?: string | null
          category?: string | null
          course_id?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          price?: number | null
          trailer_video_url?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
