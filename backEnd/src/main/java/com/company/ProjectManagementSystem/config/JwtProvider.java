package com.company.ProjectManagementSystem.config;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import javax.crypto.SecretKey;
import java.util.Date;

public class JwtProvider {
    public static String generateToken(Authentication auth){
        return Jwts.builder().setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+86400000))
                .claim("email",auth.getName())
                .signWith(getSigningKey())
                .compact();
    }

    private static SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode("ab89b9a27b4f795e6f8f6f084281ce711a5f27b5537c65dc01bcf4888f1b71fe");
        return Keys.hmacShaKeyFor(keyBytes);
    }
    public static String getEmailFromToken(String jwt){
        jwt=jwt.substring(7);
        Claims claims =Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(jwt).getBody();
        return String.valueOf(claims.get("email"));
    }
}
