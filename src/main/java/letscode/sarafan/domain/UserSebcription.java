package letscode.sarafan.domain;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Entity;

@Entity
@Data
@EqualsAndHashCode(of = "id")
@ToString(of = "id")
public class UserSebcription {
}
