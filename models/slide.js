import  { model, Schema, models } from "mongoose";

const SlideSchema = new Schema( {
   name: { type: String, required: true },
   description: String,
   price: { type: Number},
   images: [ { type: String } ],
   properties: { type: Object },
}, {
   timestamps: true,
} );

export const Slide = models.Slide || model( 'Slide', SlideSchema );